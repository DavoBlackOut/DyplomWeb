export class SearchModel {
    public searchString: string;
    public sex: string;
    public language: string;

    constructor() {
        this.searchString = '';
        this.sex = 'All';
        this.language = 'All';
    }
}
