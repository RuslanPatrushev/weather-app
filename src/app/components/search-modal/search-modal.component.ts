import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  inputCity: string;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  confirm() {
    this.activeModal.close(this.inputCity);
  }

  closeModal() {
    this.activeModal.close();
  }
}
