'use client'
import * as Blockly from 'blockly'
import React, { useRef, useEffect } from 'react'

const BlocklyComponent: React.FC = () => {
  const blocklyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (blocklyRef.current) {
      const workspace = Blockly.inject(blocklyRef.current, {
        toolbox: {
          kind: 'categoryToolbox',
          contents: [
            {
              kind: 'category',
              name: 'Logic',
              contents: [
                {
                  kind: 'block',
                  type: 'controls_if',
                },
                {
                  kind: 'block',
                  type: 'logic_compare',
                },
                {
                  kind: 'block',
                  type: 'logic_operation',
                },
                {
                  kind: 'block',
                  type: 'logic_negate',
                },
                {
                  kind: 'block',
                  type: 'logic_boolean',
                },
                {
                  kind: 'block',
                  type: 'logic_null',
                },
                {
                  kind: 'block',
                  type: 'logic_ternary',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Loops',
              contents: [
                {
                  kind: 'block',
                  type: 'controls_repeat_ext',
                },
                {
                  kind: 'block',
                  type: 'controls_whileUntil',
                },
                {
                  kind: 'block',
                  type: 'controls_for',
                },
                {
                  kind: 'block',
                  type: 'controls_forEach',
                },
                {
                  kind: 'block',
                  type: 'controls_flow_statements',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Math',
              contents: [
                {
                  kind: 'block',
                  type: 'math_number',
                },
                {
                  kind: 'block',
                  type: 'math_arithmetic',
                },
                {
                  kind: 'block',
                  type: 'math_single',
                },
                {
                  kind: 'block',
                  type: 'math_trig',
                },
                {
                  kind: 'block',
                  type: 'math_constant',
                },
                {
                  kind: 'block',
                  type: 'math_number_property',
                },
                {
                  kind: 'block',
                  type: 'math_round',
                },
                {
                  kind: 'block',
                  type: 'math_on_list',
                },
                {
                  kind: 'block',
                  type: 'math_modulo',
                },
                {
                  kind: 'block',
                  type: 'math_constrain',
                },
                {
                  kind: 'block',
                  type: 'math_random_int',
                },
                {
                  kind: 'block',
                  type: 'math_random_float',
                },
                {
                  kind: 'block',
                  type: 'math_atan2',
                },
              ],
            },
            // Text
            {
              kind: 'category',
              name: 'Text',
              contents: [
                {
                  kind: 'block',
                  type: 'text',
                },
                {
                  kind: 'block',
                  type: 'text_join',
                },
                {
                  kind: 'block',
                  type: 'text_append',
                },
                {
                  kind: 'block',
                  type: 'text_length',
                },
                {
                  kind: 'block',
                  type: 'text_isEmpty',
                },
                {
                  kind: 'block',
                  type: 'text_indexOf',
                },
                {
                  kind: 'block',
                  type: 'text_charAt',
                },
                {
                  kind: 'block',
                  type: 'text_getSubstring',
                },
                {
                  kind: 'block',
                  type: 'text_changeCase',
                },
                {
                  kind: 'block',
                  type: 'text_trim',
                },
                {
                  kind: 'block',
                  type: 'text_count',
                },
                {
                  kind: 'block',
                  type: 'text_replace',
                },
                {
                  kind: 'block',
                  type: 'text_reverse',
                },
                {
                  kind: 'block',
                  type: 'text_print',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Variables',
              contents: [
                // Create variable... button
                {
                  kind: 'button',
                  text: 'Create variable...',
                  callbackKey: 'CREATE_VARIABLE' as any,
                } as any,
              ],
            },
          ],
        },
        scrollbars: true,
        trashcan: true,
      })

      workspace.registerButtonCallback('CREATE_VARIABLE', () => {
        // Prompt the user for a new variable name.
        const variableName = prompt('Enter the name for the new variable:')

        // Check if the user entered a name (i.e., they did not press Cancel)
        if (variableName) {
          // Create the variable in the Blockly workspace
          const newVariable = workspace.createVariable(variableName)
          workspace.updateToolbox(workspace.options.languageTree)
        }
      })

      return () => {
        workspace.dispose()
      }
    }
  }, [])

  return <div ref={blocklyRef} style={{ height: '480px', width: '100%' }} />
}

export default BlocklyComponent
