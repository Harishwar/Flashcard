import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { SetInterface } from '../../models';
import { HelperService } from '../../services/helper.service';

@Component({
    templateUrl: 'share-set-dialog.component.html',
    styleUrls: ['./share-set-dialog.component.scss']
})

export class ShareSetDialogComponent implements OnInit {

    public setURL: string;

    constructor(
        private dialogRef: MatDialogRef<ShareSetDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private helperService: HelperService
    ) {
    }

    ngOnInit() {
        if (this.data) {
            const set: SetInterface = this.data;
            this.setURL = window.location.origin + '/' + set.id;
        } else {
            this.closeDialog();
        }
    }

    onURLCopy() {
        this.helperService.showMessage('Link Copied');
    }

    closeDialog(e?: any) {
        this.dialogRef.close(e);
    }

}
