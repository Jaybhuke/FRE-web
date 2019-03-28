import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  providers:[UserService]
})
export class UploaderComponent implements OnInit {

  //  selectedFile:File

  // onFileChanged(event) {
  //   const file = event.target.files[0]
  // }

  // onUpload() {
  //   // this.http is the injected HttpClient
  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //   this.http.post('http://127.0.0.1:5000/upload', uploadData,{
  //     reportProgress: true,
  //     observe: 'events'
  //   })
  //   .subscribe(event => {
  //     console.log(event); // handle event here
  //   });
  // }
  // // http://127.0.0.1:5000/upload

  imageUrl :  string ="/assets/images/default-png-1.png";
  fileToUpload : File = null;

  constructor(private imageService : UserService) { }

  ngOnInit() {
  }

  handleFileInput(file : FileList){
  this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(Image){
   this.imageService.postFile(this.fileToUpload)
   .subscribe(
     data =>{
       console.log('done');
       Image.value = null;
       
     }
   );
  }

}
