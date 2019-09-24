import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GiftGivingState } from '../../../reducers';
import { friendAdded } from '../../../actions/friends.actions';

@Component({
  selector: 'app-friend-entry',
  templateUrl: './friend-entry.component.html',
  styleUrls: ['./friend-entry.component.css']
})
export class FriendEntryComponent implements OnInit {

  constructor(private store: Store<GiftGivingState>) { }

  ngOnInit() {
  }

  addItem(nameEl: HTMLInputElement) {
    const name = nameEl.value;
    // dispatch!
    this.store.dispatch(friendAdded({ name }));

    nameEl.value = '';
    nameEl.focus();
  }
}