type ApplicationSchema = {
  question: string;
  type: string;
  required: boolean;
  info?: string;
  choices?: string[] | number[];
};

export type ApplicationForm = {
  id: string;
  last_updated_on: string;
  application_schema: ApplicationSchema[];
};

export interface Metadata {
  protocol: number;
  pointer: string;
  id: number;
  title: string;
  description: string;
  roadmap: string;
  challenges: string;
  website: string;
  projectImg?: string | Buffer;
}

// Inputs
export type InputProps = {
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  changeHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export type RadioInputProps = {
  name: string;
  value: string;
  currentValue?: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface ProjectEvent {
  id: number;
  block: number;
}
