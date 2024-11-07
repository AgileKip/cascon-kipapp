<template>
  <div>
    <div v-if="$route.params.akipEmailConnectorConfigId">
      <akip-email-connector-config-details :akipEmailConnectorConfigId="$route.params.akipEmailConnectorConfigId" />
    </div>
  </div>
</template>
