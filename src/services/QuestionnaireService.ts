const questionnaireAnswersRisk = {
  age: false,
  diseases: false,
  traveled: false,
  closeContact: false,
  positiveFever: false,
  persistentCough: false
};

export function setAgeRisk(isAtRisk: boolean) {
  questionnaireAnswersRisk.age = isAtRisk;
}
export function setDiseaseRisk(isAtRisk: boolean) {
  questionnaireAnswersRisk.diseases = isAtRisk;
}
export function setTraveledRisk(isAtRisk: boolean) {
  questionnaireAnswersRisk.traveled = isAtRisk;
}
export function setCloseContactRisk(isAtRisk: boolean) {
  questionnaireAnswersRisk.closeContact = isAtRisk;
}
export function setFeverRisk(isAtRisk: boolean) {
  questionnaireAnswersRisk.positiveFever = isAtRisk;
}
export function setCoughRisk(isAtRisk: boolean) {
  questionnaireAnswersRisk.persistentCough = isAtRisk;
}

export function isTestPositive(): boolean {
  return (
    Object.keys(questionnaireAnswersRisk)
      .map(risk => questionnaireAnswersRisk[risk])
      .filter(isRisk => !!isRisk).length >= 0
  );
}
