import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'Toggle Animation',

  schema: {
    target: ecs.eid,
  },

  stateMachine: ({world, eid, schemaAttribute}) => {

    let Stretching = true

    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.SCREEN_TOUCH_START, () => {
        const {target} = schemaAttribute.get(eid)
        Stretching = !Stretching

        ecs.GltfModel.set(world, target, {
          animationClip: Stretching ? 'Stretching' : 'Floating',
        })
      })
  }
})