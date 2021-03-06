import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EbooksService } from '../ebooks.service';
import { EbookDTO } from '../model/ebookDTO';
import { PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private ebookService: EbooksService,
    private router: Router) { }

  ebookId;
  ebook: EbookDTO;

  stiglo = false;

  ngOnInit() {

    this.ebookId = this.route.snapshot.paramMap.get('id');

    this.ebookService.getById(this.ebookId).subscribe(
      data => {

        this.ebook = data;
        this.stiglo = true;

      }
    )

  }

  ebookUpdate(value) {
    this.ebookService.updateEbook(this.ebookId, value).subscribe(
      data => {

        this.router.navigate(['/ebooks']);

      },
      error => {
        alert(error.message);
      }
    );


  }

}
