'use client'
import * as Blockly from 'blockly'
import BlocklyComponent from '@/components/BlocklyComponent'
import toast, { Toaster } from 'react-hot-toast'

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
          toast.success('The expression is correct.')
        } else {
          toast.error('The expression is incorrect.')
        }
      } else {
        toast.error('Please connect both inputs.')
      }
    } else {
      toast.error('Please add a comparison block.')
    }
  }

  return (
    <>
      <BlocklyComponent />
      <Toaster />
      <button onClick={testExpression}>Test Expression</button>
    </>
  )
}
