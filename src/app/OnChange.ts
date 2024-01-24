import { SimpleChanges } from "@angular/core";

export default interface OnChanges {
    ngOnChanges(changes: SimpleChanges): void
  }