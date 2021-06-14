<template>
  <div class="h-screen flex bg-gray-200">
    <div class="flex flex-wrap justify-items-center max-w-md m-auto px-8">
      <div class="text-gray-700 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in nisl
        pulvinar, pharetra lorem sed, aliquet justo. Cras nec vulputate risus,
        at lobortis sapien.
      </div>

      <div
        class="
          flex
          justify-items-center
          mx-auto
          mt-6
          text-gray-700
          social
          font-bold
        "
      >
        <div class="flex items-center mr-4">
          <github-icon class="mr-2" />
          <a
            href="https://github.com/aipnurhayadi"
            target="_blank"
            class="hover:underline"
            >aipnurhayadi</a
          >
        </div>
        <div class="flex items-center">
          <instagram-icon class="mr-2" />
          <a
            href="https://instagram.com/aipnurhayadi"
            target="_blank"
            class="hover:underline"
            >aipnurhayadi</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  font-family: 'Open Sans', sans-serif;
}
.social {
  font-family: 'Roboto', sans-serif;
}
</style>
