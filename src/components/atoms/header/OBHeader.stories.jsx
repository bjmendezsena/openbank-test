import React from "react";
import { OBHeader } from "./OBHeader";
import { storiesOf } from '@storybook/react';

storiesOf('Text', module)
.add('Header',()=> <OBHeader>Crea tu Password Manager</OBHeader>)
