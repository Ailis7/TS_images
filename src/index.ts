import './css/style.css';
import './ts/app'
// import { ajax } from 'rxjs/ajax';
// import { of } from 'rxjs'
// import { catchError } from 'rxjs/operators'

// const main = document.querySelector('.main')!;

// const obj$ = ajax.getJSON(`https://picsum.photos/v2/list?page=2&limit=20`)
//   .pipe(
//     catchError(error => {
//       console.log('error: ', error);
//       return of(error);
//     })
//   )
        
// type picsumType = {
//   id: string;
//   author: string;
//   width: number;
//   height: number;
//   url: string;
//   download_url: string;
// }

// obj$.subscribe((v) => {
//   (v as picsumType[]).forEach((element) => {
//     function handler(elem: picsumType) {
//       const imageContainer = document.createElement('div');
//       imageContainer.classList.add('image_container');
//       imageContainer.innerHTML = `
//       <div class="show"></div>
//       <img src=${elem.download_url} alt="image" class="image">
//       `;
//       main.append(imageContainer);
//     }
//     handler(element)
//     console.log(element)
//   });
//   const imagesArr = Array.from(document.querySelectorAll('.image_container'));

//   main.addEventListener('click', (event) => {
//     const target = <HTMLElement>event.target;
//     const show = (target.classList.contains('show')) ? target : target.previousElementSibling!;
//     const parrent = target.closest('.image_container')!;
//     show.classList.toggle('active');
//     if (show.textContent === '') {
//       const index = imagesArr.indexOf(parrent);
//       show.textContent = v[index].author
//     } else {
//       show.textContent = '';
//     }
//   })
// })



