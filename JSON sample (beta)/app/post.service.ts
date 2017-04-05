import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService
{
    private _url="http://jsonplaceholder.typicode.com/posts";

    constructor(private _http:Http)
    {

    }

    getPosts()
    {
        return this._http.get(this._url).map(res => res.json());}

    createPosts(post)
    {
        return this._http.post(this._url,JSON.stringify(post)).map(res=>res.json());
    }

}