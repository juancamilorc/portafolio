import { ChangeDetectionStrategy, Component, DOCUMENT, computed, effect, inject, signal } from '@angular/core';
import { CONTENT, Lang } from './content';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly doc = inject(DOCUMENT);

  protected readonly lang = signal<Lang>('es');
  protected readonly t = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      this.doc.documentElement.lang = this.lang();
    });
  }

  protected setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}
