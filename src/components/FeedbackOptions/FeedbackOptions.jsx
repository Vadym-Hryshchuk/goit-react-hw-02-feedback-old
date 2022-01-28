import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import { ButtonList, Item, Button } from './FeedbackOptions.styled';

const notify = name =>
  toast(`Thank you for your ${name} feedback`, { position: 'bottom-right' });

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonList = Object.keys(options);
  return (
    <>
      <ButtonList>
        {buttonList.map(button => (
          <Item key={button}>
            <Button
              onClick={() => {
                onLeaveFeedback(button);
                notify(button);
              }}
            >
              {button}
            </Button>
            <Toaster />
          </Item>
        ))}
      </ButtonList>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
