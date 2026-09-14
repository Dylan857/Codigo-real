export type LessonCode = string | { html?: string; css?: string; js?: string };

export interface ExplanationRow {
  code: string;
  desc: string;
}

export interface RealLesson {
  slug: string;
  title: string;
  summary: string;
  playgroundCode: LessonCode;
  hint: string;
  explanationIntro: string;
  explanationRows: ExplanationRow[];
  tip: string;
  extra: string;
  commonError: string;
  nextStepText: string;
  challenge: { description: string; code: LessonCode };
}

export interface LessonStub {
  title: string;
}

export interface CourseModule {
  slug: string;
  title: string;
  lessons: RealLesson[] | LessonStub[];
  hasContent: boolean;
}

export type AdjacentLesson = RealLesson & { moduleSlug: string };
