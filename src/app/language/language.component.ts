import { Component, OnInit } from '@angular/core';
import { Language } from '../Models/Language';
import { LanguageService } from '../language.service';
import { User, Account } from '../Models/Account';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  knownLanguages: Array<Language>;
  learnLanguages: Array<Language>;
  restLanguages: Array<Language>;

  constructor(private languageService: LanguageService,
    private authorizationService: AuthorizationService) {
    this.languageService.getKnownLanguages().subscribe(data => this.knownLanguages = data);
    this.languageService.getLearnLanguages().subscribe(data => this.learnLanguages = data);
    this.languageService.getRestLanguages().subscribe(data => this.restLanguages = data);
  }

  ngOnInit() {
  }

  add(language: Language, type: string) {
    if (type === 'Known') {
      this.languageService.addKnownLanguages(language).subscribe(data => {
        this.knownLanguages.push(language);
        this.restLanguages = this.restLanguages.filter(x => x.languageId !== language.languageId);
      });
    }

    if (type === 'Learn') {
      this.languageService.addLearnLanguages(language).subscribe(data => {
        this.learnLanguages.push(language);
        this.restLanguages = this.restLanguages.filter(x => x.languageId !== language.languageId);
      });
    }
  }

  remove(language: Language): void {
    this.languageService.remove(language).subscribe(data => {
      this.restLanguages.push(language);
      this.knownLanguages = this.knownLanguages.filter(x => x.languageId !== language.languageId);
      this.learnLanguages = this.learnLanguages.filter(x => x.languageId !== language.languageId);
    });
  }

}
