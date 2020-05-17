import { connect } from 'formik';
import noop from 'lodash/noop';
import { useEffect } from 'react';
import usePrevious from 'react-use/lib/usePrevious';

const FormikEffect = ({ onChange = noop, formik }) => {
  const { values } = formik;
  const prevValues = usePrevious(values);

  useEffect(() => {
    // Don't run effect on form init
    if (prevValues) {
      onChange({ prevValues, nextValues: values, formik });
    }
  }, [values]);

  return null;
};

export default connect(FormikEffect);
