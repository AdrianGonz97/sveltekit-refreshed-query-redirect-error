<script lang="ts">
	import { getCount, increment } from "./count.remote.ts";

	let count = $derived(await getCount());
</script>

<form {...increment}>
	Count: {count}
	<button type="submit">Increment</button>
</form>
