
export class ExamInstance {
    id: string="";
    examDefinitionId: string="";
    startedTime!: Date;
    endTime!: Date ;
    duration: number=0;
    compilationTime!: Date;
    createdBy: string="";
    takenBy: string="";
    status: string="";
    // questions: Set<Question>;
}
