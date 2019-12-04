import React, {useContext} from 'react';
import { SettingsContext } from "../settings/site-context";

const Increment = (props) => {
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
              <button style={styles.button} onClick={() => context.increment()}> +</button>
            </div>
          </section>
        </>
    );
};

export default Increment;