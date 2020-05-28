/* eslint-disable */
type CompoundTypesMapObject<typesMap extends {[p: string]: any}, returnType, rootNode> = ({
  0:
    ((targets: typesMap['minecraft:entity']) => rootNode)
  1:
    ((advancement: typesMap['minecraft:resource_location']) => rootNode)
  2:
    ((advancement: typesMap['minecraft:resource_location']) => returnType) &
    ((advancement: typesMap['minecraft:resource_location'], criterion: typesMap['brigadier:string']) => rootNode)
  3:
    ((target: typesMap['minecraft:entity'], attribute: typesMap['minecraft:resource_location']) => rootNode)
  4:
    ((scale: typesMap['brigadier:double']) => rootNode)
  5:
    ((value: typesMap['brigadier:double']) => rootNode)
  6:
    ((uuid: typesMap['minecraft:uuid'], name: typesMap['brigadier:string'], value: typesMap['brigadier:double']) => rootNode)
  7:
    ((uuid: typesMap['minecraft:uuid']) => rootNode)
  8:
    ((get: typesMap['undefined'], uuid: typesMap['minecraft:uuid']) => returnType) &
    ((get: typesMap['undefined'], uuid: typesMap['minecraft:uuid'], scale: typesMap['brigadier:double']) => rootNode)
  9:
    ((targets: typesMap['minecraft:game_profile']) => returnType) &
    ((targets: typesMap['minecraft:game_profile'], reason: typesMap['minecraft:message']) => rootNode)
  10:
    ((target: typesMap['brigadier:string']) => returnType) &
    ((target: typesMap['brigadier:string'], reason: typesMap['minecraft:message']) => rootNode)
  11:
    ((id: typesMap['minecraft:resource_location'], name: typesMap['minecraft:component']) => rootNode)
  12:
    ((id: typesMap['minecraft:resource_location']) => rootNode)
  13:
    ((max: typesMap['brigadier:integer']) => rootNode)
  14:
    ((name: typesMap['minecraft:component']) => rootNode)
  15:
    ((value: typesMap['brigadier:integer']) => rootNode)
  16:
    ((visible: typesMap['brigadier:bool']) => rootNode)
  17:
    ((targets: typesMap['minecraft:entity']) => returnType) &
    ((targets: typesMap['minecraft:entity'], item: typesMap['minecraft:item_predicate']) => returnType) &
    ((targets: typesMap['minecraft:entity'], item: typesMap['minecraft:item_predicate'], maxCount: typesMap['brigadier:integer']) => rootNode)
  18:
    ((begin: typesMap['minecraft:block_pos'], end: typesMap['minecraft:block_pos'], destination: typesMap['minecraft:block_pos']) => rootNode)
  19:
    ((filter: typesMap['minecraft:block_predicate']) => rootNode)
  20:
    ((targetPos: typesMap['minecraft:block_pos']) => returnType) &
    ((targetPos: typesMap['minecraft:block_pos'], path: typesMap['minecraft:nbt_path']) => returnType) &
    ((targetPos: typesMap['minecraft:block_pos'], path: typesMap['minecraft:nbt_path'], scale: typesMap['brigadier:double']) => rootNode)
  21:
    ((target: typesMap['minecraft:entity']) => returnType) &
    ((target: typesMap['minecraft:entity'], path: typesMap['minecraft:nbt_path']) => returnType) &
    ((target: typesMap['minecraft:entity'], path: typesMap['minecraft:nbt_path'], scale: typesMap['brigadier:double']) => rootNode)
  22:
    ((target: typesMap['minecraft:resource_location']) => returnType) &
    ((target: typesMap['minecraft:resource_location'], path: typesMap['minecraft:nbt_path']) => returnType) &
    ((target: typesMap['minecraft:resource_location'], path: typesMap['minecraft:nbt_path'], scale: typesMap['brigadier:double']) => rootNode)
  23:
    ((targetPos: typesMap['minecraft:block_pos'], nbt: typesMap['minecraft:nbt_compound_tag']) => rootNode)
  24:
    ((target: typesMap['minecraft:entity'], nbt: typesMap['minecraft:nbt_compound_tag']) => rootNode)
  25:
    ((target: typesMap['minecraft:resource_location'], nbt: typesMap['minecraft:nbt_compound_tag']) => rootNode)
  26:
    ((targetPos: typesMap['minecraft:block_pos'], targetPath: typesMap['minecraft:nbt_path']) => rootNode)
  27:
    ((sourcePos: typesMap['minecraft:block_pos']) => returnType) &
    ((sourcePos: typesMap['minecraft:block_pos'], sourcePath: typesMap['minecraft:nbt_path']) => rootNode)
  28:
    ((source: typesMap['minecraft:entity']) => returnType) &
    ((source: typesMap['minecraft:entity'], sourcePath: typesMap['minecraft:nbt_path']) => rootNode)
  29:
    ((source: typesMap['minecraft:resource_location']) => returnType) &
    ((source: typesMap['minecraft:resource_location'], sourcePath: typesMap['minecraft:nbt_path']) => rootNode)
  30:
    ((value: typesMap['minecraft:nbt_tag']) => rootNode)
  31:
    ((index: typesMap['brigadier:integer']) => rootNode)
  32:
    ((target: typesMap['minecraft:entity'], targetPath: typesMap['minecraft:nbt_path']) => rootNode)
  33:
    ((target: typesMap['minecraft:resource_location'], targetPath: typesMap['minecraft:nbt_path']) => rootNode)
  34:
    ((targetPos: typesMap['minecraft:block_pos'], path: typesMap['minecraft:nbt_path']) => rootNode)
  35:
    ((target: typesMap['minecraft:entity'], path: typesMap['minecraft:nbt_path']) => rootNode)
  36:
    ((target: typesMap['minecraft:resource_location'], path: typesMap['minecraft:nbt_path']) => rootNode)
  37:
    ((name: typesMap['brigadier:string']) => rootNode)
  38:
    ((existing: typesMap['brigadier:string']) => rootNode)
  39:
    ((targets: typesMap['minecraft:game_profile']) => rootNode)
  40:
    ((targets: typesMap['minecraft:entity']) => returnType) &
    ((targets: typesMap['minecraft:entity'], effect: typesMap['minecraft:mob_effect']) => rootNode)
  41:
    ((targets: typesMap['minecraft:entity'], effect: typesMap['minecraft:mob_effect']) => returnType) &
    ((targets: typesMap['minecraft:entity'], effect: typesMap['minecraft:mob_effect'], seconds: typesMap['brigadier:integer']) => returnType) &
    ((targets: typesMap['minecraft:entity'], effect: typesMap['minecraft:mob_effect'], seconds: typesMap['brigadier:integer'], amplifier: typesMap['brigadier:integer']) => returnType) &
    ((targets: typesMap['minecraft:entity'], effect: typesMap['minecraft:mob_effect'], seconds: typesMap['brigadier:integer'], amplifier: typesMap['brigadier:integer'], hideParticles: typesMap['brigadier:bool']) => rootNode)
  42:
    ((targets: typesMap['minecraft:entity'], enchantment: typesMap['minecraft:item_enchantment']) => returnType) &
    ((targets: typesMap['minecraft:entity'], enchantment: typesMap['minecraft:item_enchantment'], level: typesMap['brigadier:integer']) => rootNode)
  43:
    ((axes: typesMap['minecraft:swizzle']) => rootNode)
  44:
    ((anchor: typesMap['minecraft:entity_anchor']) => rootNode)
  45:
    ((targets: typesMap['minecraft:entity'], anchor: typesMap['minecraft:entity_anchor']) => rootNode)
  46:
    ((pos: typesMap['minecraft:vec3']) => rootNode)
  47:
    ((pos: typesMap['minecraft:block_pos'], block: typesMap['minecraft:block_predicate']) => rootNode)
  48:
    ((start: typesMap['minecraft:block_pos'], end: typesMap['minecraft:block_pos'], destination: typesMap['minecraft:block_pos']) => rootNode)
  49:
    ((sourcePos: typesMap['minecraft:block_pos'], path: typesMap['minecraft:nbt_path']) => rootNode)
  50:
    ((source: typesMap['minecraft:entity'], path: typesMap['minecraft:nbt_path']) => rootNode)
  51:
    ((source: typesMap['minecraft:resource_location'], path: typesMap['minecraft:nbt_path']) => rootNode)
  52:
    ((entities: typesMap['minecraft:entity']) => rootNode)
  53:
    ((predicate: typesMap['minecraft:resource_location']) => rootNode)
  54:
    ((target: typesMap['minecraft:score_holder'], targetObjective: typesMap['minecraft:objective']) => rootNode)
  55:
    ((source: typesMap['minecraft:score_holder'], sourceObjective: typesMap['minecraft:objective']) => rootNode)
  56:
    ((range: typesMap['minecraft:int_range']) => rootNode)
  57:
    ((dimension: typesMap['minecraft:dimension']) => rootNode)
  58:
    ((rot: typesMap['minecraft:rotation']) => rootNode)
  59:
    ((targets: typesMap['minecraft:score_holder'], objective: typesMap['minecraft:objective']) => rootNode)
  60:
    ((callback: typesMap['sandstone:callback']) => rootNode)
  61:
    ((targets: typesMap['minecraft:entity'], amount: typesMap['brigadier:integer']) => rootNode)
  62:
    ((from: typesMap['minecraft:block_pos'], to: typesMap['minecraft:block_pos'], block: typesMap['minecraft:block_state']) => rootNode)
  63:
    ((from: typesMap['minecraft:column_pos']) => returnType) &
    ((from: typesMap['minecraft:column_pos'], to: typesMap['minecraft:column_pos']) => rootNode)
  64:
    ((pos: typesMap['minecraft:column_pos']) => rootNode)
  65:
    ((from: typesMap['minecraft:column_pos']) => rootNode)
  66:
    ((to: typesMap['minecraft:column_pos']) => rootNode)
  67:
    ((name: typesMap['minecraft:function']) => rootNode)
  68:
    ((target: typesMap['minecraft:entity']) => rootNode)
  69:
    ((value: typesMap['brigadier:bool']) => rootNode)
  70:
    ((targets: typesMap['minecraft:entity'], item: typesMap['minecraft:item_stack']) => returnType) &
    ((targets: typesMap['minecraft:entity'], item: typesMap['minecraft:item_stack'], count: typesMap['brigadier:integer']) => rootNode)
  71:
    ((command: typesMap['brigadier:string']) => rootNode)
  72:
    ((targets: typesMap['minecraft:entity']) => returnType) &
    ((targets: typesMap['minecraft:entity'], reason: typesMap['minecraft:message']) => rootNode)
  73:
    ((biome: typesMap['minecraft:resource_location']) => rootNode)
  74:
    ((players: typesMap['minecraft:entity']) => rootNode)
  75:
    ((loot_table: typesMap['minecraft:resource_location'], pos: typesMap['minecraft:block_pos']) => rootNode)
  76:
    ((tool: typesMap['minecraft:item_stack']) => rootNode)
  77:
    ((loot_table: typesMap['minecraft:resource_location']) => rootNode)
  78:
    ((pos: typesMap['minecraft:block_pos']) => rootNode)
  79:
    ((targetPos: typesMap['minecraft:block_pos']) => rootNode)
  80:
    ((targetPos: typesMap['minecraft:block_pos'], slot: typesMap['minecraft:item_slot']) => rootNode)
  81:
    ((count: typesMap['brigadier:integer']) => rootNode)
  82:
    ((entities: typesMap['minecraft:entity'], slot: typesMap['minecraft:item_slot']) => rootNode)
  83:
    ((targetPos: typesMap['minecraft:vec3']) => rootNode)
  84:
    ((action: typesMap['brigadier:string']) => rootNode)
  85:
    ((targets: typesMap['minecraft:entity'], message: typesMap['minecraft:message']) => rootNode)
  86:
    ((target: typesMap['brigadier:string']) => rootNode)
  87:
    ((name: typesMap['minecraft:particle']) => returnType) &
    ((name: typesMap['minecraft:particle'], pos: typesMap['minecraft:vec3']) => returnType) &
    ((name: typesMap['minecraft:particle'], pos: typesMap['minecraft:vec3'], delta: typesMap['minecraft:vec3'], speed: typesMap['brigadier:float'], count: typesMap['brigadier:integer']) => rootNode)
  88:
    ((viewers: typesMap['minecraft:entity']) => rootNode)
  89:
    ((sound: typesMap['minecraft:resource_location']) => rootNode)
  90:
    ((targets: typesMap['minecraft:entity']) => returnType) &
    ((targets: typesMap['minecraft:entity'], pos: typesMap['minecraft:vec3']) => returnType) &
    ((targets: typesMap['minecraft:entity'], pos: typesMap['minecraft:vec3'], volume: typesMap['brigadier:float']) => returnType) &
    ((targets: typesMap['minecraft:entity'], pos: typesMap['minecraft:vec3'], volume: typesMap['brigadier:float'], pitch: typesMap['brigadier:float']) => returnType) &
    ((targets: typesMap['minecraft:entity'], pos: typesMap['minecraft:vec3'], volume: typesMap['brigadier:float'], pitch: typesMap['brigadier:float'], minVolume: typesMap['brigadier:float']) => rootNode)
  91:
    ((port: typesMap['brigadier:integer']) => rootNode)
  92:
    ((recipe: typesMap['minecraft:resource_location']) => rootNode)
  93:
    ((pos: typesMap['minecraft:block_pos'], slot: typesMap['minecraft:item_slot'], item: typesMap['minecraft:item_stack']) => returnType) &
    ((pos: typesMap['minecraft:block_pos'], slot: typesMap['minecraft:item_slot'], item: typesMap['minecraft:item_stack'], count: typesMap['brigadier:integer']) => rootNode)
  94:
    ((targets: typesMap['minecraft:entity'], slot: typesMap['minecraft:item_slot'], item: typesMap['minecraft:item_stack']) => returnType) &
    ((targets: typesMap['minecraft:entity'], slot: typesMap['minecraft:item_slot'], item: typesMap['minecraft:item_stack'], count: typesMap['brigadier:integer']) => rootNode)
  95:
    ((message: typesMap['minecraft:message']) => rootNode)
  96:
    ((function_: typesMap['brigadier:string']) => rootNode)
  97:
    ((function_: typesMap['minecraft:function'], time: typesMap['minecraft:time']) => rootNode)
  98:
    ((objective: typesMap['brigadier:string'], criteria: typesMap['minecraft:objective_criteria']) => returnType) &
    ((objective: typesMap['brigadier:string'], criteria: typesMap['minecraft:objective_criteria'], displayName: typesMap['minecraft:component']) => rootNode)
  99:
    ((objective: typesMap['minecraft:objective']) => rootNode)
  100:
    ((displayName: typesMap['minecraft:component']) => rootNode)
  101:
    ((slot: typesMap['minecraft:scoreboard_slot']) => returnType) &
    ((slot: typesMap['minecraft:scoreboard_slot'], objective: typesMap['minecraft:objective']) => rootNode)
  102:
    ((targets: typesMap['minecraft:score_holder'], objective: typesMap['minecraft:objective'], score: typesMap['brigadier:integer']) => rootNode)
  103:
    ((target: typesMap['minecraft:score_holder'], objective: typesMap['minecraft:objective']) => rootNode)
  104:
    ((target: typesMap['minecraft:score_holder']) => rootNode)
  105:
    ((targets: typesMap['minecraft:score_holder'], targetObjective: typesMap['minecraft:objective'], operation: typesMap['minecraft:operation'], source: typesMap['minecraft:score_holder'], sourceObjective: typesMap['minecraft:objective']) => rootNode)
  106:
    ((targets: typesMap['minecraft:score_holder']) => returnType) &
    ((targets: typesMap['minecraft:score_holder'], objective: typesMap['minecraft:objective']) => rootNode)
  107:
    ((pos: typesMap['minecraft:block_pos'], block: typesMap['minecraft:block_state']) => rootNode)
  108:
    ((minutes: typesMap['brigadier:integer']) => rootNode)
  109:
    ((targets: typesMap['minecraft:entity']) => returnType) &
    ((targets: typesMap['minecraft:entity'], pos: typesMap['minecraft:block_pos']) => rootNode)
  110:
    ((target: typesMap['minecraft:entity']) => returnType) &
    ((target: typesMap['minecraft:entity'], player: typesMap['minecraft:entity']) => rootNode)
  111:
    ((center: typesMap['minecraft:vec2'], spreadDistance: typesMap['brigadier:float'], maxRange: typesMap['brigadier:float'], respectTeams: typesMap['brigadier:bool'], targets: typesMap['minecraft:entity']) => rootNode)
  112:
    ((entity: typesMap['minecraft:entity_summon']) => returnType) &
    ((entity: typesMap['minecraft:entity_summon'], pos: typesMap['minecraft:vec3']) => returnType) &
    ((entity: typesMap['minecraft:entity_summon'], pos: typesMap['minecraft:vec3'], nbt: typesMap['minecraft:nbt_compound_tag']) => rootNode)
  113:
    ((team: typesMap['brigadier:string']) => returnType) &
    ((team: typesMap['brigadier:string'], displayName: typesMap['minecraft:component']) => rootNode)
  114:
    ((team: typesMap['minecraft:team']) => rootNode)
  115:
    ((team: typesMap['minecraft:team']) => returnType) &
    ((team: typesMap['minecraft:team'], members: typesMap['minecraft:score_holder']) => rootNode)
  116:
    ((members: typesMap['minecraft:score_holder']) => rootNode)
  117:
    ((value: typesMap['minecraft:color']) => rootNode)
  118:
    ((allowed: typesMap['brigadier:bool']) => rootNode)
  119:
    ((prefix: typesMap['minecraft:component']) => rootNode)
  120:
    ((suffix: typesMap['minecraft:component']) => rootNode)
  121:
    ((destination: typesMap['minecraft:entity']) => rootNode)
  122:
    ((location: typesMap['minecraft:vec3']) => rootNode)
  123:
    ((facingEntity: typesMap['minecraft:entity']) => returnType) &
    ((facingEntity: typesMap['minecraft:entity'], facingAnchor: typesMap['minecraft:entity_anchor']) => rootNode)
  124:
    ((facingLocation: typesMap['minecraft:vec3']) => rootNode)
  125:
    ((rotation: typesMap['minecraft:rotation']) => rootNode)
  126:
    ((targets: typesMap['minecraft:entity'], message: typesMap['minecraft:component']) => rootNode)
  127:
    ((time: typesMap['minecraft:time']) => rootNode)
  128:
    ((title: typesMap['minecraft:component']) => rootNode)
  129:
    ((fadeIn: typesMap['brigadier:integer'], stay: typesMap['brigadier:integer'], fadeOut: typesMap['brigadier:integer']) => rootNode)
  130:
    ((duration: typesMap['brigadier:integer']) => rootNode)
  131:
    ((distance: typesMap['brigadier:float']) => returnType) &
    ((distance: typesMap['brigadier:float'], time: typesMap['brigadier:integer']) => rootNode)
  132:
    ((pos: typesMap['minecraft:vec2']) => rootNode)
  133:
    ((damagePerBlock: typesMap['brigadier:float']) => rootNode)
  134:
    ((distance: typesMap['brigadier:float']) => rootNode)
  135:
    ((distance: typesMap['brigadier:integer']) => rootNode)
  136:
    ((time: typesMap['brigadier:integer']) => rootNode)
})

export type CompoundTypesMap<typesMap extends {[p: string]: any}, returnType, rootNode, k extends number>  = (
  k extends keyof CompoundTypesMapObject<typesMap, returnType, rootNode> ?
    CompoundTypesMapObject<typesMap, returnType, rootNode>[k] :
    never
)
