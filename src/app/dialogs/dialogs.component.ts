import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User, Account } from '../Models/Account';
import { Message } from '../Models/Message';
import { AuthorizationService } from '../authorization.service';
import { SearchModel } from '../Models/SearchModel';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {

  user: Account;
  users: Array<User>;
  selectedUser: User = null;
  message: Message;
  messages: Array<Message>;
  // ws = new WebSocket('ws://localhost:5000/ws');
  searchModel: SearchModel;
  ws = new WebSocket('ws://ec2-18-191-55-98.us-east-2.compute.amazonaws.com/ws');

  page: number;

  isLoadedNewMessages = true;

  debug: string;
  audio: any;

  constructor(private usersService: UsersService,
    private authorizationService: AuthorizationService,
    private messagesService: MessagesService,
    private route: ActivatedRoute,
    private location: Location) {
    this.messages = new Array<Message>();
    this.searchModel = new SearchModel();

    this.ws.onmessage = this.OnWebSocketMessageEvent();
    this.ws.onclose = x => {
    };
  }

  private OnWebSocketMessageEvent(): (this: WebSocket, ev: MessageEvent) => any {
    return (response) => {
      const receivedMessageObject = JSON.parse(response.data);
      const receivedMessage = Message.ConvertToMessage(receivedMessageObject);
      if (this.user.accountId !== receivedMessage.senderId) {
        receivedMessage.readTime = new Date();
        this.messages.unshift(receivedMessage);
      }
    };
  }

  ngOnInit() {
    this
      .authorizationService
      .getAccount()
      .subscribe(data => this.user = data);

    this.loadUsers();
  }

  public loadUsers() {
    this
      .usersService
      .getUsers(this.searchModel)
      .subscribe(data => {
        this.users = data;
        this.users.forEach(x => this.messagesService.getUnreadedMessagesCountFromUser(x)
          .subscribe(messagesCount => x.unreadedMessagesCount = messagesCount));
        const id = +this.route.snapshot.paramMap.get('id');
        if (id) {
          this.users.forEach(element => {
            if (element.userId === id) {
              this.onSelect(element);
            }
          });
        }
      });
  }

  onSelect(user: User) {
    this.selectedUser = user;

    this
      .usersService
      .getDialog(this.selectedUser)
      .subscribe(data => {
        this.messages = data;

        this.message = new Message(this.selectedUser.userId);

        this.page = 0;
        this.selectedUser.unreadedMessagesCount = 0;
      });
  }

  sendMessage() {
    this
      .usersService
      .sendMessage(this.message)
      .subscribe(data => {

        this.ws.send(JSON.stringify(this.message));

        this.messages.unshift(data);
        this.message = new Message(this.selectedUser.userId);
      });
  }

  loadMore(event: Event) {
    if (this.isLoadedNewMessages) {

      const scrollLength = event.srcElement.scrollTop + event.srcElement.parentElement.offsetHeight - 2;

      if (scrollLength >= event.srcElement.scrollHeight) {
        this.isLoadedNewMessages = false;

        // Load new messages
        this.page = this.page + 1;

        this.usersService.getDialog(this.selectedUser, this.page).subscribe(data => {
          for (let i = 0; i < data.length; i++) {
            this.messages.push(data[i]);
          }

          this.isLoadedNewMessages = true;
        });
      }
    }
  }
}
