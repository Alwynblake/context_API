import React, {useContext} from 'react';
import { SettingsContext } from '../settings/site-context.js';

// const styles = {
//   container: {
//     alignItems: 'center',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     width: '40%',
//   },

const  Count = (props) => {
  const context = useContext(SettingsContext);

  // const styles = {
  //   container: {
  //     alignItems: 'center',
  //     display: 'flex',
  //     flexDirection: 'row',
  //     justifyContent: 'space-evenly',
  //     width: '40%',
  // },
  //   counter: {
  //     display: 'inline-block',
  //     fontSize: '1em',
  //     border: '2px solid #444',
  //     borderRadius: '50%',
  //     lineHeight: '5em',
  //     textAlign: 'center',
  //     width: '5em',
  //   },
  // };
  return (
      <>
        <section>
          <div>
             {context.counter}
          </div>
        </section>
        </>
  )
};

export default Count;