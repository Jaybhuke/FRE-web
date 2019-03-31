import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';


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

  // imageUrl :  string ="/assets/images/default-png-1.png";
  // fileToUpload : File = null;
  // form:FormGroup;

  selectedFile: File = null;
  form:any={
    file:null
  };
  constructor(private fb:FormBuilder, private imageService : UserService) {
    // this.createForm();
   }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile =<File>event.target.files[0];
    // return this.selectedFile
  }

  onUpload(){
    // Create Json and send as req
    // this.form.file=this.selectedFile;
    // console.log(this.selectedFile);
    const file: FormData = new FormData();
    file.append('file', this.selectedFile,this.selectedFile.name);
    // console.log(formData);
    
    this.imageService.postFile(file)
    .subscribe(
      (data) => {console.log(data);
      },
      (error) => {console.log(error);
      }
      );
  }

  // onFileChange(event) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.form.get('avatar').setValue({
  //         filename: file.name,
  //         filetype: file.type,
  //         value: (<string>reader.result).split(',')[1]
  //       })
  //     };
  //   }
  // }
  // private prepareSave(): any {
  //   let input = new FormData();
  //   // input.append('name', this.form.get('name').value);
  //   input.append('avatar', this.form.get('avatar').value);
  //   return input;
  // }
  
  // createForm() {
  //   this.form = this.fb.group({
  //     avatar: null
  //   });
  // }

  // handleFileInput(file : FileList){
  // this.fileToUpload = file.item(0);

  //   var reader = new FileReader();
  //   reader.onload = (event:any) => {
  //     this.imageUrl = event.target.result;
  //   }
  //   reader.readAsDataURL(this.fileToUpload);
  // }
  // onSubmit() {
  //   const formModel = this.prepareSave();
  //   console.log(formModel);
    
  //   this.imageService.postFile(formModel)
  //   .subscribe(
  //     (data)=>{console.log(data);
  //   },
  //   (error)=>{
  //     console.log(error);
  //   }
  //   );
    // this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
   
  // }

  // onSubmit(Image){
  //   console.log(Image);
    
  //  this.imageService.postFile(this.fileToUpload)
  //  .subscribe(
  //    data =>{
  //      console.log('done');
  //      Image.value = null;
       
  //    }
  //  );
  // }
  // avatar: {
  //   filename: "10x10png",
  //   filetype: "image/png",
  //   value: "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB/HNKOAAAAGFBMVEXMzMyWlpajo6O3t7fFxcWcnJyxsbG+vr50Rsl6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJklEQVQImWNgwADKDAwsAQyuDAzMAgyMbOYMAgyuLApAUhnMRgIANvcCBwsFJwYAAAAASUVORK5CYII="
  // }
  // https://nehalist.io/uploading-files-in-angular2/
}
