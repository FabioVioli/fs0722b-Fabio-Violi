import { Injectable } from '@angular/core';
import { Post } from '../interface/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPost() {
    fetch('assets/db.json').then(response => response.json()).then(data => this.post = data)

  }
  post: Post[];
  constructor() { this.post = [] }

  getPostActive(): Post[] {
    let postAttivi: Post[] = []
    this.post.forEach(post => {
      if (post.active) {
        postAttivi.push(post)
      }
    });
    return postAttivi
  }
  getPostDisattivi(): Post[] {
    let postDisattivi: Post[] = []
    this.post.forEach(post => {
      if (!post.active) {
        postDisattivi.push(post)
      }
    });
    return postDisattivi
  }
}
