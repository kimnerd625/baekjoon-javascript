import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        
        // 10,000보다 작거나 같은 자연수이므로, 0부터 10,000까지의 숫자를 카운팅할 배열 생성
        int[] count = new int[10001];

        for (int i = 0; i < N; i++) {
            // 입력받은 숫자에 해당하는 count 배열의 값을 1 증가
            count[Integer.parseInt(br.readLine())]++;
        }

        StringBuilder sb = new StringBuilder();
        
        // count 배열을 순회하면서, 0이 아닌 값을 가진 인덱스를 그 개수만큼 출력
        for (int i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                sb.append(i).append('\n');
                count[i]--;
            }
        }
        
        System.out.println(sb);
    }
}