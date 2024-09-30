<template>
    <VPLayout>
        <!-- page content -->
        <slot></slot>
    </VPLayout>
</template>

<script setup>
import {VPLayout} from 'vitepress/theme';
</script>

<head>
</head>

<template>
    <VPLayout>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLMTFQG9"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <slot></slot>
    </VPLayout>
</template>