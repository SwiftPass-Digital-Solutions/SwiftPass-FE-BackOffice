import { Component, computed, inject } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
    selector: 'app-overview',
    templateUrl: './overview.html',
})
export class Overview {
    private authService = inject(AuthService);

    user = computed(() => this.authService.user());
}