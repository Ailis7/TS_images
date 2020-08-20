import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { picsumType } from './types'

const main = document.querySelector('.main');

const observer$ = ajax.getJSON(`https://picsum.photos/v2/list?page=2&limit=20`)
  .pipe(
    catchError(error => {
      console.log('error: ', error);
      return of(error);
    })
  )

observer$.subscribe((value) => {
  const handler = (elem: picsumType) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image_container');
    imageContainer.innerHTML = `
      <div class="show"></div>
      <img src=${elem.download_url} alt="image" class="image">
      `;
    main?.append(imageContainer);
  }
  (value as picsumType[]).forEach((element) => {
    handler(element)
  });

  const imagesArr = Array.from(document.querySelectorAll('.image_container'));
  
  main?.addEventListener('click', (event) => {
    const target = <HTMLElement>event.target;
    const show = (target.classList.contains('show')) ? target : target.previousElementSibling as Element;
    const parrent = target.closest('.image_container');
    show.classList.toggle('active');
    if (show?.textContent === '') {
      const index = imagesArr.indexOf(parrent as Element);
      show.textContent = value[index].author
    } else {
      show.textContent = '';
    }
  })
})