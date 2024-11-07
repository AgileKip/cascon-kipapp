<template>
  <div v-if="$route.params.tenantId">
    <tenant-details :tenantId="$route.params.tenantId" />
  </div>
</template>
