import java.util.List;
import java.util.ArrayList;

public class RecentMistakesFirstSorter implements CardOrganizer{
    @Override
    public List<Card> organize(List<Card> cards){
        List<Card> incorrect =new ArrayList<>();
        List<Card> correct =new ArrayList<>();

        for (Card c : cards){
            if (!c.wasCorrect()){
                incorrect.add(c);
            } else {
                correct.add(c);
            }
        }

        List<Card> result = new ArrayList<>();
        result.addAll(incorrect);
        result.addAll(correct);
        return result;
    }
}