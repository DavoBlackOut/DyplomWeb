import { Country } from './Country';

export class SearchModel {
    public searchString: string;
    public sex: string;
    public country: Country;

    constructor() {
        this.searchString = '';
        this.sex = 'All';
        this.country = new Country();
        this.country.title = 'All';
    }
}
