import { Directive, ElementRef, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as CodeMirror from 'codemirror';

export const CODE_MIRROR_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CodeMirrorDirective),
  multi: true,
};

@Directive({
  selector: '[appCodeMirror]',
  providers: [CODE_MIRROR_CONTROL_VALUE_ACCESSOR],
})
export class CodeMirrorDirective implements ControlValueAccessor, OnInit, OnDestroy {
  protected onChange: any = Function.prototype;
  protected onTouched: any = Function.prototype;

  @Input('appCodeMirror') private config: CodeMirror.EditorConfiguration;

  private nativeElement;
  private codeMirror: CodeMirror.EditorFromTextArea;

  constructor(el: ElementRef) {
    this.nativeElement = el.nativeElement;
  }

  public ngOnInit() {
    this.config = this.config || {};
    this.initCodeMirror();
  }

  public ngOnDestroy() {
    this.codeMirror.off('change', null);
    this.codeMirror.toTextArea();
  }

  public writeValue(obj: any): void {
    if (obj == null || obj === '') {
      this.codeMirror.setValue('');
    } else {
      this.codeMirror.setValue(obj);
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private initCodeMirror() {
    this.codeMirror = CodeMirror.fromTextArea(this.nativeElement, this.config);

    this.codeMirror.on('change', () => {
      this.onTouched();
      this.onChange(this.codeMirror.getValue());
    });
  }
}
