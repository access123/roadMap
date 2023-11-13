import { Sheet, Radio} from "@mui/joy";
import React from 'react'

const RenderedOptions = ({questionInfo}) => {
    return questionInfo.options.map((option, index) => (
      <Sheet
        key={index}
        sx={{
          p: 1,
          borderRadius: 'sm',
          boxShadow: 'xs',
        }}
      >
        <Radio
          label={option}
          overlay
          disableIcon
          value={option}
          slotProps={{
            label: ({ checked }) => ({
              sx: {
                fontWeight: 'md',
                fontSize: 'sm',
                color: checked ? 'text.primary' : 'text.secondary',
              },
            }),
            action: ({ checked }) => ({
              sx: (theme) => ({
                ...(checked && {
                  '--variant-borderWidth': '1px',
                  '&&': {
                    borderColor: theme.vars.palette.primary[500],
                  },
                }),
              }),
            }),
          }}
        />
      </Sheet>
    ));
}
    export default RenderedOptions;