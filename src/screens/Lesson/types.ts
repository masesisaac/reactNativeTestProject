export interface ScreenData {
  name: string;
  title?: string;
  buttonText?: string;
  body?: string;
  image?: {
    fields: {
      title: string;
      file: {
        url: string;
      };
    };
  };
  feedbackTitle?: string;
}

export interface RouteParams {
  data: ScreenData;
  nextScreen: string | null;
}
