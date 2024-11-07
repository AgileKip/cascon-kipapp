<template>
  <div>
    <div v-if="$route.params.bpmnProcessDefinitionId && $route.params.processTimelineDefinitionId">
      <process-timeline-definition-details
        :bpmnProcessDefinitionId="$route.params.bpmnProcessDefinitionId"
        :processTimelineDefinitionId="$route.params.processTimelineDefinitionId"
      />
    </div>
  </div>
</template>
