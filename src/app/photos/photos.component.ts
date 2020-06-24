import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  imageUrl = '';

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.fetchPhoto();
  }

  onFetchPhoto() {
    this.fetchPhoto()
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe(imageUrl =>
      this.imageUrl = imageUrl
    );
  }
}
