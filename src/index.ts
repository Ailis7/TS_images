import './css/style.css';
import './ts/app'
import { ajax } from 'rxjs/ajax';


// const main = document.querySelector('.main');

// const apiUrl1 = `https://picsum.photos/v2/list?page=2&limit=20`;


const obj$ = ajax.getJSON(`https://picsum.photos/v2/list?page=2&limit=20`)
.pipe(
  // catchError(error => {
    //   console.log('error: ', error);
    //   return of(error);
    // })
    )
    
    
    
    type picsumType = {
      id: string;
      author: string;
      width: number;
      height: number;
      url: string;
      download_url: string;
    }

obj$.subscribe((v: any) => {
  console.log(typeof v)
  console.log(v);
  v.forEach((element: picsumType) => {
    console.log(element)
  });
})


// const image$ = ajaxGet(`https://picsum.photos/id/1016/3844/2563`)
// image$.subscribe( v => console.log(v));



