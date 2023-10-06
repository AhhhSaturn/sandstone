import { CommandNode, TagClass } from 'sandstone/core/index.js'

import { CommandArguments } from '../../helpers.js'

import type { MCFunctionClass } from 'sandstone/core/index.js'

// Function command

export class FunctionCommandNode extends CommandNode<[string | MCFunctionClass]> {
  command = 'function' as const
}

export class FunctionCommand extends CommandArguments {
  protected NodeType = FunctionCommandNode

  function = (mcFunction: string | MCFunctionClass | TagClass<'functions'>) => this.finalCommand([mcFunction instanceof TagClass ? `#${mcFunction}` : mcFunction])
}
