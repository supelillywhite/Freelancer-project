import { Component} from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard'
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "Hey you hippies",
      file_url: "http://google.com",
      updated_at: "2/1/2017",
      image_url: "https://thump-images.vice.com/images/articles/meta/2016/06/01/we-asked-the-hippies-of-lightning-in-a-bottle-what-it-means-to-be-a-hippie-1464803352.jpg?crop=0.9219194421506559xw:1xh;center,center&resize=1200:*",
    },
    {
      title: "My Second Doc",
      description: "Hey you hippies",
      file_url: "http://google.com",
      updated_at: "2/1/2017",
      image_url: "http://cdn.groovyhistory.com/content/34658/9f2faa7bf413a7746b7c2f7438485e6e.jpg",
    },
    {
      title: "My Last Doc",
      description: "Hey you hippies",
      file_url: "http://google.com",
      updated_at: "2/1/2017",
      image_url: "http://www.sikkensprize.org/wp-content/uploads/2017/03/Sikkensprize_HIPPIES-2-1-800x534-c-center.jpg",
    }
  ]
}