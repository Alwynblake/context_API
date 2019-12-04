// import React from 'react';
import React, {useContext} from 'react';
import { SettingsContext } from "../settings/site-context";

const Decrement = (props) => {
  const context = useContext(SettingsContext);

  const styles = {
    button: {
      height: '3em'
    },
  };

    return (
        <>
          <section>
            <div>
              <button style={styles.button} onClick={() => context.decrement()}> -</button>
            </div>
          </section>
        </>
    );
};
export default Decrement;