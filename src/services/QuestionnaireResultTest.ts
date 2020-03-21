interface QuestionnaireAnswers {
  age: number;
  diseases: [],
  traveled: boolean,
  closeContact: boolean,
  positiveFever: boolean,
  persistentCough: boolean
}


const questionnaireAnswers: QuestionnaireAnswers = {
  age: 0,
  diseases: [],
  traveled: false,
  closeContact: false,
  positiveFever: false,
  persistentCough: false
}


export function setAnswer(key: keyof QuestionnaireAnswers, value: number | Array<string> | boolean) {
  questionnaireAnswers[key as string] = value;
}

export function isTestPositive(): boolean {
  const { age, diseases, traveled, closeContact, persistentCough, positiveFever } = questionnaireAnswers;
  if (age % 2 === 0) {
    return true;
  }

  return false;
}
