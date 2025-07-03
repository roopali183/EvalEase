import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS


import GuestLayout from './components/guestLayout/GuestLayout';
import About from './components/guestLayout/About';
import Home from './components/guestLayout/Home';
import StudentRegister from './components/guestLayout/StudentRegister';
import StudentLogin from './components/guestLayout/StudentLogin';
import CollegeRegistration from './components/guestLayout/CollegeRegistration';
import CollegeLogin from './components/guestLayout/CollegeLogin';
import EvaluatorRegistration from './components/guestLayout/EvaluatorRegistration';
import EvaluatorLogin from './components/guestLayout/EvaluatorLogin';
import StudentForgotPassword from './components/StudentLayout/StudentForgotPassword';
import CollegeForgotPassword from './components/CollegeLayout/CollegeForgotPassword';
import EvaluatorForgotPassword from './components/EvaluatorLayout/EvaluatorForgotPassword';
import UniversityForgotPassword from './components/UniversityLayout/UniversityForgotPassword';
import UniversityLayout from './components/UniversityLayout/UniversityLayout';
import StudentLayout from './components/StudentLayout/StudentLayout';
import EvaluatorLayout from './components/EvaluatorLayout/EvaluatorLayout';
import CollegeLayout from './components/CollegeLayout/CollegeLayout';
import UniversityLogin from './components/guestLayout/UniversityLogin';
import CollegeList from './components/CollegeLayout/CollegeList';
import EvaluatorsList from './components/EvaluatorLayout/EvaluatorsList';
import StudentsList from './components/StudentLayout/StudentsList';
import AddCourse from './components/UniversityLayout/AddCourse';
import AddSubject from './components/UniversityLayout/AddSubject';
import StudentNotifications from './components/StudentLayout/StudentNotifications';
import Notifications from './components/UniversityLayout/Notifications';
import UploadAnswersSheets from './components/CollegeLayout/UploadAnswersSheets';
import AnswerSheets from './components/CollegeLayout/AnswerSheets';
import Result from './components/CollegeLayout/Result';
import AnswersListBySubject from './components/EvaluatorLayout/AnswersListBySubject';
import MarksDetails from './components/CollegeLayout/MarksDetails';
import Marks from './components/UniversityLayout/Marks';
import Contact from './components/guestLayout/Contact';
import EditCollegeProfile from './components/CollegeLayout/EditCollegeProfile';
import ChangeCollegePassword from './components/CollegeLayout/ChangeCollegePassword';
import EvaluatorEditProfile from './components/EvaluatorLayout/EvaluatorEditProfile';
import EvaluatorChangePassword from './components/EvaluatorLayout/EvaluatorChangePassword';
import UniversityChangePassword from './components/UniversityLayout/UniversityChangePassword';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/guestLayout/studentRegistration' element={<StudentRegister />} />
          <Route path='/guestLayout/studentLogin' element={<StudentLogin />} />
          <Route path='/studentForgotPassword' element={<StudentForgotPassword />} />

          <Route path='/guestLayout/collegeRegistration' element={<CollegeRegistration />} />
          <Route path='/guestLayout/collegeLogin' element={<CollegeLogin />} />
          <Route path='/collegeForgotPassword' element={<CollegeForgotPassword />} />

          <Route path='/guestLayout/evaluatorRegistration' element={<EvaluatorRegistration />} />
          <Route path='/guestLayout/evaluatorLogin' element={<EvaluatorLogin />} />
          <Route path='/evaluatorForgotPassword' element={<EvaluatorForgotPassword />} />

          <Route path='/guestLayout/universityLogin' element={<UniversityLogin />} />
          <Route path='/universityForgotPassword' element={<UniversityForgotPassword />} />

        </Route>

        <Route path='/student' element={<StudentLayout />}>

        </Route>

        <Route path='/college' element={<CollegeLayout />}>
          <Route path='/college/studentList' element={<StudentsList />} />
          <Route path='/college/notifications' element={<StudentNotifications />} />
          <Route path='/college/uploadAnswers' element={<UploadAnswersSheets />} />
          <Route path='/college/answers' element={<AnswerSheets />} />
          <Route path='/college/marks' element={<MarksDetails />} />
          <Route path='/college/edit-profile' element={<EditCollegeProfile />} />
          <Route path='/college/change-password' element={<ChangeCollegePassword />} />
        </Route>

        <Route path='/evaluator' element={<EvaluatorLayout />}>
        <Route path='/evaluator/notifications' element={<StudentNotifications/>}/>
          <Route path='/evaluator/answerSheets' element={<AnswersListBySubject />} />
          <Route path='/evaluator/edit-profile' element={<EvaluatorEditProfile />} />
          <Route path='/evaluator/change-password' element={<EvaluatorChangePassword />} />
        </Route>

        <Route path='/university' element={<UniversityLayout />}>
          <Route path='/university/collegeList' element={<CollegeList />} />
          <Route path='/university/evaluatorList' element={<EvaluatorsList />} />
          <Route path='/university/course' element={<AddCourse />} />
          <Route path='/university/subject' element={<AddSubject />} />
          <Route path='/university/notifications' element={<Notifications />} />
          <Route path='/university/marks' element={<Marks />} />
          <Route path='/university/change-password' element={<UniversityChangePassword />} />
        </Route>


      </Routes>
    </div>
  );
}

export default App;
