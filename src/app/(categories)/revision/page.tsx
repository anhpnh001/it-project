'use client'
import * as Blockly from 'blockly'
import BlocklyComponent from '@/components/BlocklyComponent'

export default function Revision() {
  const testExpression = () => {
    const workspace = Blockly.getMainWorkspace()
    const allBlocks = workspace.getAllBlocks(false)

    // Assuming the first block is the comparison block
    const comparisonBlock = allBlocks.find(
      (block) => block.type === 'logic_compare'
    )
    if (comparisonBlock) {
      const inputABlock = comparisonBlock.getInputTargetBlock('A')
      const inputBBlock = comparisonBlock.getInputTargetBlock('B')

      // Check if both inputs are connected
      if (inputABlock && inputBBlock) {
        // Safely get the field values, assuming they are numbers
        const leftNumber = parseFloat(inputABlock.getFieldValue('NUM') || '0')
        const rightNumber = parseFloat(inputBBlock.getFieldValue('NUM') || '0')
        const operator = comparisonBlock.getFieldValue('OP')

        // Check if the structure matches 5 > 3
        if (leftNumber === 5 && rightNumber === 3 && operator === 'GT') {
          alert('Correct! 5 is greater than 3.')
        } else {
          alert('Incorrect, try again.')
        }
      } else {
        alert('Please ensure both sides of the comparison are connected.')
      }
    } else {
      alert('Please create a comparison using the blocks.')
    }
  }

  return (
    <>
      <BlocklyComponent />
      <button onClick={testExpression}>Test Expression</button>
    </>
  )
}
