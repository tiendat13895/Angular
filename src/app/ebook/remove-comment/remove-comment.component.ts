import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IComment } from '../../interfaces/IComment';
import { CommentService } from '../../shared/services/comment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-remove-comment',
  templateUrl: './remove-comment.component.html',
  styleUrls: ['./remove-comment.component.css']
})
export class RemoveCommentComponent implements OnInit {

  comment: IComment;
  constructor(private commentService: CommentService, private toastr: ToastrService,
    public dialogRef: MatDialogRef<RemoveCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.comment = data;
  }

  ngOnInit() {
  }

  deleteComment() {
    this.commentService.deleteComment(this.comment.id);
    this.dialogRef.close();
    this.toastr.success('Successfull!!', 'Delete Comment');
  }

  close() {
    this.dialogRef.close();
  }
}
