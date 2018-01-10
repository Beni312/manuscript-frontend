import {Password} from './password';
import {AcademicDiscipline} from './academic.discipline';

export class UserRegistration {

  title: string;
  firstName: string;
  lastName: string;
  job: string;
  email: string;
  userName: string;
  password: Password;
  academicDisciplines: AcademicDiscipline[];
}
