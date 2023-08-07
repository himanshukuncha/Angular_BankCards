import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cardsapply',
  templateUrl: './cardsapply.component.html',
  styleUrls: ['./cardsapply.component.css'],
})
export class CardsapplyComponent implements OnInit {
  loadedPosts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { pannumber: string; mobilenumber: number; email:string; currentpin:number; jobtitle:string; employersname:string; annualincome:number; address:string}) {
    // Send Http request
    console.log(postData);
    this.http
      .post(
        'https://cards-589ef-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get<any>('https://cards-589ef-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.loadedPosts = posts; // Assign the posts to the component property
      });
  }
}
