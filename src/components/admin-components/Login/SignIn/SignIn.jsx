import BasicContainerLogin from '../BasicContainerLogin/BasicContainerLogin';
import Heading from '../Heading/Heading';
import ButtonSubmit from '../../Buttons/SubmitButton/ButtonSubmit.jsx';

const SignIn = () => {
  const handleClick = () => {
    console.log('Увійти');
  };
  return (
    // <>
    //   <div>Hello</div>
    <BasicContainerLogin>
      <Heading title="Увійти в акаунт" />
      <ButtonSubmit
        handlerSubmitButton={handleClick}
        nameButton="Увійти"
        isActive={true}
      />
    </BasicContainerLogin>
    // </>
  );
};
export default SignIn;
