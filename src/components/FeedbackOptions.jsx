import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Thank you for your feedback');

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonList = Object.keys(options);
  return (
    <>
      <ul>
        {buttonList.map(button => (
          <li key={button}>
            <button
              onClick={() => {
                onLeaveFeedback(button);
                notify();
              }}
            >
              {button}
            </button>
            <Toaster />
          </li>
        ))}
      </ul>
    </>
  );
}
