import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({ radioValues }) {
    const [value, setValue] = React.useState();
    radioValues(value)

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Which best describes you</FormLabel>
            <RadioGroup
                aria-label="role"
                name="radio-buttons-group"
                onChange={(e) => setValue(e.target.value)}
            >
                <FormControlLabel value="Representative of an orgnizationzation" control={<Radio />} label="Representative of an orgnization" />
                <FormControlLabel value="Representative of a partner organization" control={<Radio />} label="Representative of a partner organization" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    );
}
